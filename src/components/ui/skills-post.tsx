"use client";

import { Skill } from "@/types";
import { motion } from "framer-motion";
import { Code2, Star, TrendingUp, Zap } from "lucide-react";

interface SkillsPostProps {
  skills: Skill[];
  category: string;
}

export default function SkillsPost({ skills, category }: SkillsPostProps) {
  const getSkillColor = (level?: string) => {
    switch (level) {
      case "Expert": return "bg-red-500/20 text-red-600 border-red-500/30";
      case "Advanced": return "bg-purple-500/20 text-purple-600 border-purple-500/30";
      case "Intermediate": return "bg-blue-500/20 text-blue-600 border-blue-500/30";
      case "Beginner": return "bg-green-500/20 text-green-600 border-green-500/30";
      default: return "bg-gray-500/20 text-gray-600 border-gray-500/30";
    }
  };

  const getLevelIcon = (level?: string) => {
    switch (level) {
      case "Expert": return <Star className="w-3 h-3" />;
      case "Advanced": return <TrendingUp className="w-3 h-3" />;
      case "Intermediate": return <Code2 className="w-3 h-3" />;
      case "Beginner": return <Zap className="w-3 h-3" />;
      default: return null;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-6 backdrop-blur-sm border border-border/50"
    >
      {/* Post Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white text-sm font-bold">
          <Code2 className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">
            Skills Update
          </h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="capitalize">{category} Skills</span>
            <span>•</span>
            <span>{skills.length} total</span>
          </div>
        </div>
      </div>

      {/* Skills Content */}
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Here are my current {category.toLowerCase()} skills and technologies I work with:
        </p>

        <div className="grid grid-cols-1 gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="text-foreground font-medium text-sm">
                  {skill.name}
                </div>
                {skill.since && (
                  <div className="text-xs text-muted-foreground">
                    Since {skill.since}
                  </div>
                )}
              </div>
              
              {skill.level && (
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getSkillColor(skill.level)}`}>
                  {getLevelIcon(skill.level)}
                  {skill.level}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="pt-3 border-t border-border/50">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Total Skills</span>
            <span className="font-medium">{skills.length}</span>
          </div>
          {skills.some(s => s.level) && (
            <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
              <span>Skill Levels</span>
              <div className="flex gap-2">
                {["Expert", "Advanced", "Intermediate", "Beginner"]
                  .map(level => ({
                    level,
                    count: skills.filter(s => s.level === level).length
                  }))
                  .filter(({ count }) => count > 0)
                  .map(({ level, count }) => (
                    <span key={level} className="text-xs">
                      {level}: {count}
                    </span>
                  ))
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}