import React, { useRef } from 'react';
import { Mail, Terminal, Camera, Linkedin, Twitter, Github, Code2, Globe, Cpu } from 'lucide-react';
import { UserProfile } from '../types';
import { Button } from './Button';

interface SidebarProps {
  profile: UserProfile;
  onUpdateAvatar: (file: File) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ profile, onUpdateAvatar }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onUpdateAvatar(e.target.files[0]);
    }
  };

  return (
    <aside className="w-full lg:w-[40%] h-auto lg:h-screen bg-black border-r border-white/10 text-white flex flex-col justify-between p-8 lg:p-12 lg:fixed lg:left-0 lg:top-0 overflow-y-auto z-10 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-tech-purple/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative space-y-10 z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-accent/10 border border-tech-accent/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-accent"></span>
          </span>
          <span className="text-xs font-mono text-tech-accent tracking-widest uppercase">Open to Work</span>
        </div>

        {/* Profile Image with Tech Border */}
        <div className="group relative w-32 h-32 lg:w-48 lg:h-48">
          <div className="absolute -inset-1 bg-gradient-to-r from-tech-accent to-tech-purple rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-black bg-black">
            <img 
              src={profile.avatar} 
              alt={profile.name} 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110"
            />
          </div>
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-2 right-2 p-3 bg-tech-accent text-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_20px_rgba(0,242,255,0.5)] hover:scale-110"
            aria-label="Update Avatar"
          >
            <Camera size={18} />
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept="image/*"
          />
        </div>

        {/* Identity */}
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-500">
            {profile.name}
          </h1>
          <div className="flex items-center gap-3 text-xl lg:text-2xl text-tech-accent font-mono">
            <Terminal size={24} />
            <span>{profile.title}</span>
          </div>
        </div>

        {/* Bio */}
        <div className="max-w-md relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-tech-purple to-transparent opacity-50"></div>
          <p className="text-gray-400 font-light leading-relaxed text-lg pl-4">
            {profile.bio}
          </p>
        </div>

        {/* Skills - Tech Stack Style */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
            <Cpu size={14} /> Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-sm font-mono text-gray-300 hover:border-tech-accent/50 hover:text-tech-accent hover:bg-tech-accent/5 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Contact */}
      <div className="mt-12 space-y-6 z-10 relative">
        <Button fullWidth onClick={() => window.location.href = `mailto:${profile.email}`}>
          <Mail className="mr-3 h-5 w-5" />
          Iniciar Proyecto
        </Button>
        
        <div className="flex items-center justify-between pt-8 border-t border-white/10">
          <div className="flex gap-6">
            {profile.socials.map((social) => (
              <a 
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                {social.platform === 'Twitter' && <Twitter size={22} />}
                {social.platform === 'LinkedIn' && <Linkedin size={22} />}
                {social.platform === 'GitHub' && <Github size={22} />}
                <span className="sr-only">{social.platform}</span>
              </a>
            ))}
          </div>
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            v3.0.1 &bull; 2024
          </p>
        </div>
      </div>
    </aside>
  );
};