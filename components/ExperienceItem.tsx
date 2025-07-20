import React from "react";
import { TExperience } from "@/data";

type Props = {
    experience: TExperience;
};

const ExperienceItem: React.FC<Props> = ({ experience }) => {
    return (
        <>
            {/* Desktop layout */}
            <div className="items-center md:flex hidden">
                <div className="flex flex-col gap-y-3 text-right w-3/6 mr-20">
                    <div className="text-lg font-semibold">
            <span className="dark:text-purple text-2xl font-bold">
              {experience.company}
            </span>{" "}
                        | {experience.location}
                    </div>
                    <div className="text-lg text-muted-foreground">{experience.title}</div>
                </div>
                <div className="flex flex-row border-l-4 border-l-[#323647] dark:border-l-white pl-12 py-10 w-3/5">
                    <div
                        className={`-translate-x-[220%] relative min-w-[30px] h-[30px] ${
                            experience.endDate === "Present"
                                ? "bg-yellow-100 dark:bg-yellow-900/20"
                                : "dark:bg-white/30 bg-[#323647]/40"
                        } rounded-full flex items-center justify-center`}
                    >
                        <div
                            className={`w-[15px] h-[15px] ${
                                experience.endDate === "Present"
                                    ? "bg-yellow-300 dark:bg-yellow-500"
                                    : "dark:bg-white bg-[#323647]"
                            } rounded-full`}
                        />
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className="text-lg font-semibold text-foreground">
                            {experience.startDate} – {experience.endDate}
                        </div>
                        <div className="flex flex-col gap-y-2">
                            {experience.tasks.map((task, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-x-2 text-sm text-muted-foreground"
                                >
                                    <div className="min-w-[5px] min-h-[5px] bg-[#323647] dark:bg-[#E2E5F0] rounded-full" />
                                    <span dangerouslySetInnerHTML={{ __html: task }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile layout */}
            <div className="items-start md:hidden flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2 w-full">
                    <div className="text-xl font-semibold text-foreground">
            <span className="text-primary font-bold">
              {experience.company}
            </span>{" "}
                        | {experience.location}
                    </div>
                    <div className="text-lg text-muted-foreground">{experience.title}</div>
                </div>
                <div className="flex flex-col gap-y-5">
                    <div className="text-lg font-semibold text-foreground">
                        {experience.startDate} – {experience.endDate}
                    </div>
                    <div className="flex flex-col gap-y-1">
                        {experience.tasks.map((task, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-x-2 text-sm text-muted-foreground"
                            >
                                <div className="min-w-[5px] min-h-[5px] bg-[#323647] dark:bg-[#E2E5F0] rounded-full" />
                                <span dangerouslySetInnerHTML={{ __html: task }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExperienceItem;
