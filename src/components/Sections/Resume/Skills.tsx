import {
  CodeBracketIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ServerStackIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="rounded-2xl border border-neutral-700 bg-neutral-800 p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-2.5 w-2.5 rounded-full bg-orange-500" />
        <span className="text-lg font-semibold text-white">{name}</span>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name} = skill;

  const IconComponent = (() => {
    const normalizedName = name.toLowerCase();

    if (normalizedName.includes('react') || normalizedName.includes('next') || normalizedName.includes('frontend')) {
      return CodeBracketIcon;
    }

    if (normalizedName.includes('node') || normalizedName.includes('backend') || normalizedName.includes('api')) {
      return ServerStackIcon;
    }

    if (normalizedName.includes('html') || normalizedName.includes('css') || normalizedName.includes('javascript') || normalizedName.includes('typescript')) {
      return GlobeAltIcon;
    }

    if (normalizedName.includes('python') || normalizedName.includes('java')) {
      return CpuChipIcon;
    }

    if (normalizedName.includes('mobile') || normalizedName.includes('native')) {
      return DevicePhoneMobileIcon;
    }

    if (normalizedName.includes('ai') || normalizedName.includes('ml')) {
      return SparklesIcon;
    }

    return WrenchScrewdriverIcon;
  })();

  return (
    <div className="group relative">
      <div className="flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-700 px-3 py-2 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-900 text-orange-400">
          <IconComponent className="h-4 w-4" />
        </span>
        <span className="text-sm font-semibold text-neutral-200">{name}</span>
      </div>

        <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-max max-w-[180px] -translate-x-1/2 scale-95 rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-white opacity-0 shadow-xl transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
        <div className="flex items-center gap-2">
          <span className="text-orange-400">
            <IconComponent className="h-4 w-4" />
          </span>
          <span className="font-medium">{name}</span>
        </div>
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
