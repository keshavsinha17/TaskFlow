
import React from 'react';
import { Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamCardProps {
  name: string;
  memberCount: number;
  onClick: () => void;
  isActive?: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ 
  name, 
  memberCount, 
  onClick,
  isActive = false 
}) => {
  return (
    <div 
      className={cn(
        "team-card transition-all duration-200 animate-fade-in",
        isActive && "border-primary/50 bg-primary/5"
      )}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-foreground truncate">{name}</h3>
        <div className="flex items-center text-muted-foreground text-sm">
          <Users size={14} className="mr-1" />
          <span>{memberCount}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
