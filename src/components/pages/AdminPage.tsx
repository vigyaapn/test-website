import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Breadcrumbs } from '../common/Breadcrumbs';
import {
  Users,
  Inbox,
  Briefcase,
  TrendingUp,
  Download,
  Trash2,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Building,
  DollarSign,
  FileText,
  Search,
  ExternalLink
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const {
    leads,
    applications,
    analyticsStats,
    updateLeadStatus,
    deleteLead,
    clearAllData,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState<'leads' | 'applications' | 'analytics'>('leads');
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = leadStatusFilter === 'all' || lead.status === leadStatusFilter;
    const matchesSearch =
      `${lead.firstName} ${lead.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.company && lead.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
      lead.service.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const exportLeadsCSV = () => {
    if (leads.length === 0) {
      showToast('No leads to export', 'info');
      return;
    }
    const headers = ['ID', 'Date', 'First Name', 'Last Name', 'Email', 'Phone', 'Company', 'Service', 'Budget', 'Status', 'NDA', 'Message'];
    const rows = leads.map(l => [
      l.id,
      new Date(l.createdAt).toISOString(),
      `"${l.firstName}"`,
      `"${l.lastName}"`,
      `"${l.email}"`,
      `"${l.phone}"`,
      `"${l.company || ''}"`,
      `"${l.service}"`,
      `"${l.budget}"`,
      `"${l.status}"`,
      l.ndaRequested ? 'Yes' : 'No',
      `"${l.message.replace(/"/g, '""')}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `vigyaapn_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Leads exported as CSV', 'success');
  };

  return (
    <div id="admin-page" className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'Agency Portal & Leads' }]} />
      </div>

      {/* HEADER SECTION */}
      <section className="py-8 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                Vigyaapn Business Operations
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Real-time lead inbox, applicant tracker, and visitor telemetry.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={exportLeadsCSV}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>Export Leads (CSV)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (confirm('Are you sure you want to reset demo data?')) {
                    clearAllData();
                  }
                }}
                className="px-4 py-2 bg-red-950/60 hover:bg-red-900/60 text-red-300 border border-red-800/60 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Reset Demo Data</span>
              </button>
            </div>
          </div>

          {/* QUICK METRICS BAR */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Total Leads</div>
              <div className="text-2xl font-bold text-white mt-1">{leads.length}</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Active Applications</div>
              <div className="text-2xl font-bold text-emerald-400 mt-1">{applications.length}</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Contact Inquiries</div>
              <div className="text-2xl font-bold text-teal-400 mt-1">{analyticsStats.contactSubmissions + leads.length}</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">CTA Engagements</div>
              <div className="text-2xl font-bold text-cyan-400 mt-1">{analyticsStats.ctaClicks}</div>
            </div>
          </div>

          {/* TAB BUTTONS */}
          <div className="flex items-center gap-3 mt-8 border-b border-slate-800">
            <button
              type="button"
              onClick={() => setActiveTab('leads')}
              className={`pb-3 px-2 text-xs font-bold transition-colors cursor-pointer border-b-2 ${
                activeTab === 'leads'
                  ? 'border-emerald-400 text-emerald-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Inquiries & Leads ({leads.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('applications')}
              className={`pb-3 px-2 text-xs font-bold transition-colors cursor-pointer border-b-2 ${
                activeTab === 'applications'
                  ? 'border-emerald-400 text-emerald-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Job Applications ({applications.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('analytics')}
              className={`pb-3 px-2 text-xs font-bold transition-colors cursor-pointer border-b-2 ${
                activeTab === 'analytics'
                  ? 'border-emerald-400 text-emerald-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Telemetry & Traffic
            </button>
          </div>

        </div>
      </section>

      {/* TAB CONTENT: LEADS */}
      {activeTab === 'leads' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* SEARCH & STATUS FILTER */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="relative w-full sm:w-72">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search leads..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
                {['all', 'new', 'contacted', 'qualified', 'proposal', 'won'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setLeadStatusFilter(st)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-colors cursor-pointer ${
                      leadStatusFilter === st
                        ? 'bg-emerald-400 text-slate-950 font-bold'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* LEADS LIST */}
            {filteredLeads.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-slate-900/40 border border-slate-800">
                <Inbox className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white mb-1">No Leads Found</h3>
                <p className="text-xs text-slate-400">
                  Submit a project inquiry through any form on the site to see it appear here immediately.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                  >
                    <div className="space-y-3 max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-white">
                          {lead.firstName} {lead.lastName}
                        </span>
                        {lead.company && (
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <Building className="w-3 h-3 text-slate-500" />
                            <span>{lead.company}</span>
                          </span>
                        )}
                        <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40 font-semibold">
                          {lead.service}
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          Budget: {lead.budget}
                        </span>
                        {lead.ndaRequested && (
                          <span className="text-[11px] px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/40 font-semibold">
                            NDA Required
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                        "{lead.message}"
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                        <a href={`mailto:${lead.email}`} className="flex items-center gap-1 text-emerald-400 hover:underline">
                          <Mail className="w-3.5 h-3.5" />
                          <span>{lead.email}</span>
                        </a>
                        <a href={`tel:${lead.phone}`} className="flex items-center gap-1 hover:text-white">
                          <Phone className="w-3.5 h-3.5" />
                          <span>{lead.phone}</span>
                        </a>
                        <span className="text-slate-600">•</span>
                        <span className="text-[11px] text-slate-500">
                          Received {new Date(lead.createdAt).toLocaleDateString()} at {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value as any)}
                        className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                      >
                        <option value="new">Status: New</option>
                        <option value="contacted">Status: Contacted</option>
                        <option value="qualified">Status: Qualified</option>
                        <option value="proposal">Status: Proposal</option>
                        <option value="won">Status: Won</option>
                        <option value="lost">Status: Lost</option>
                      </select>

                      <button
                        type="button"
                        onClick={() => deleteLead(lead.id)}
                        className="p-2 rounded-xl text-slate-500 hover:text-red-400 hover:bg-slate-800 transition-colors"
                        title="Delete lead"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>
      )}

      {/* TAB CONTENT: APPLICATIONS */}
      {activeTab === 'applications' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {applications.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-slate-900/40 border border-slate-800">
                <Briefcase className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white mb-1">No Applications Submitted</h3>
                <p className="text-xs text-slate-400">
                  Applications submitted on the Careers page will appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {applications.map((app) => (
                  <div
                    key={app.id}
                    className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <div className="text-base font-bold text-white">{app.fullName}</div>
                        <div className="text-xs text-emerald-400 font-semibold">{app.jobTitle}</div>
                      </div>
                      <div className="text-xs text-slate-500">
                        {new Date(app.createdAt).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span>{app.email}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>{app.phone}</span>
                      </span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <FileText className="w-3.5 h-3.5" />
                        <span>{app.resumeName}</span>
                      </span>
                    </div>

                    {app.coverLetter && (
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-300 italic">
                        "{app.coverLetter}"
                      </div>
                    )}

                    <div className="flex items-center gap-4 text-xs">
                      {app.linkedIn && (
                        <a
                          href={app.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:underline flex items-center gap-1"
                        >
                          <span>LinkedIn</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {app.portfolio && (
                        <a
                          href={app.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-400 hover:underline flex items-center gap-1"
                        >
                          <span>Portfolio / GitHub</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* TAB CONTENT: ANALYTICS */}
      {activeTab === 'analytics' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800">
              <h3 className="text-base font-bold text-white mb-4">Traffic & Conversion Summary</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs text-slate-400">Total User Engagements</div>
                  <div className="text-3xl font-extrabold text-white mt-1">{analyticsStats.ctaClicks + analyticsStats.whatsappClicks + analyticsStats.phoneClicks}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Lead Inquiries Received</div>
                  <div className="text-3xl font-extrabold text-emerald-400 mt-1">{leads.length}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Job Submissions</div>
                  <div className="text-3xl font-extrabold text-teal-400 mt-1">{applications.length}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
