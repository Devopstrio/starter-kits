import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';
import { 
  Package, 
  Zap, 
  Box, 
  Terminal,
  ArrowUpRight,
  TrendingDown,
  Clock,
  LayoutDashboard,
  Code,
  Globe,
  Database,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

const usageTrends = [
  { name: 'Mon', web: 45, api: 30, cloud: 12 },
  { name: 'Tue', web: 52, api: 35, cloud: 15 },
  { name: 'Wed', web: 48, api: 45, cloud: 25 },
  { name: 'Thu', web: 61, api: 40, cloud: 20 },
  { name: 'Fri', web: 55, api: 38, cloud: 18 },
  { name: 'Sat', web: 32, api: 20, cloud: 10 },
  { name: 'Sun', web: 28, api: 15, cloud: 8 },
];

const KPI_CARDS = [
  { title: 'Total Kits', value: '42', trend: '+5 new', color: 'violet', icon: Package },
  { title: 'Project Spawned', value: '1,284', trend: '+18% WoW', color: 'violet', icon: Zap },
  { title: 'Time Saved (Avg)', value: '6.4h', trend: 'Per Dev', color: 'emerald', icon: Clock },
  { title: 'Policy Compliance', value: '100%', trend: 'L3 Mature', color: 'violet', icon: ShieldCheck },
];

const KitsCatalog = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Starter Kits Catalog</h1>
          <p className="text-slate-400">Curated, production-ready blueprints for rapid enterprise engineering.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Manage Templates
          </button>
          <button className="bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            New Starter Kit
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-violet-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-violet-400`} />
              </div>
              <div className={`text-xs font-medium ${card.trend.includes('+') || card.trend.includes('Mature') ? 'text-emerald-400' : 'text-slate-400'}`}>
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Scaffolding Velocity Graph */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Generation Velocity (Weekly)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={usageTrends}>
                <defs>
                  <linearGradient id="colorWeb" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="web" stroke="#8b5cf6" fill="url(#colorWeb)" name="Web Apps" />
                <Area type="monotone" dataKey="api" stroke="#10b981" fill="transparent" strokeDasharray="5 5" name="API Services" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Popular Tech Stacks */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col">
          <h3 className="text-lg font-bold text-white mb-6">Top Tech Blueprints</h3>
          <div className="flex-1 space-y-6">
            {[
              { name: 'React + Vite + TS', value: 85, color: 'bg-violet-500' },
              { name: 'FastAPI + PostgreSQL', value: 65, color: 'bg-violet-500' },
              { name: 'Go + K8s Sidecar', value: 42, color: 'bg-violet-500' },
              { name: 'LLM Agent Starter', value: 28, color: 'bg-emerald-500' },
            ].map((stack) => (
              <div key={stack.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">{stack.name}</span>
                  <span className="text-slate-400">{stack.value}% Popularity</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${stack.color}`} style={{ width: `${stack.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kits Catalog Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Production-Ready Starter Kits</h3>
          <button className="text-violet-400 hover:text-violet-300 text-sm font-medium">View Policy Matrix</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Kit ID</th>
                <th className="px-6 py-4 font-semibold">Kit Name</th>
                <th className="px-6 py-4 font-semibold">Stack</th>
                <th className="px-6 py-4 font-semibold">Complexity</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { id: 'web-react-01', name: 'Premium React Dashboard', stack: 'React, Vite, Tailwind', diff: 'Medium', status: 'APPROVED' },
                { id: 'api-fast-04', name: 'Microservice Core API', stack: 'FastAPI, Pydantic, Redis', diff: 'Low', status: 'APPROVED' },
                { id: 'ai-agent-02', name: 'Auto-GPT Agent Node', stack: 'Python, LangChain, Pinecone', diff: 'High', status: 'BETA' },
                { id: 'infra-tf-09', name: 'EKS Landing Zone', stack: 'Terraform, Helm, AWS', diff: 'High', status: 'STAGING' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4 text-xs font-mono text-slate-400">{row.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Box className="w-4 h-4 text-violet-400" />
                      <span className="text-sm font-medium text-slate-300">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-400">{row.stack}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded ${
                      row.diff === 'Low' ? 'bg-emerald-500/10 text-emerald-400' :
                      row.diff === 'Medium' ? 'bg-sky-500/10 text-sky-400' :
                      'bg-amber-500/10 text-amber-400'
                    }`}>
                      {row.diff}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded border ${
                      row.status === 'APPROVED' ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10' : 
                      row.status === 'BETA' ? 'text-violet-400 border-violet-500/20 bg-violet-500/10' :
                      'text-amber-400 border-amber-500/20 bg-amber-500/10'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-violet-400 hover:text-violet-300 text-xs font-bold uppercase tracking-wider">
                      Preview
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KitsCatalog;
