import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  style: "italic",
  subsets: ["latin"],
});

export function AboutMe() {
  return (
    <section className="prose prose-zinc dark:prose-invert text-[15px] animate-slide-from-down-and-fade-2 text-pretty">
      <p className="leading-relaxed">
        I&#39;m a{" "}
        <span
          className={cn(
            "font-medium font-reader text-[16px] text-foreground",
            newsreader.className
          )}
        >
          Computer Scientist
        </span>{" "}
        with experience in Android (Jetpack Compose), C++, and full-stack
        workflows, focused on writing clean, dependable code. I improve fast,
        adapt easily, and care about building software that makes sense for the
        user.
      </p>
      <p className="leading-relaxed">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <span className="italic hover:underline underline-offset-4">
                {" "}
              </span>
            </TooltipTrigger>
            <TooltipContent align="start">
              <span className="italic prose prose-zinc dark:prose-invert text-sm">
                (n.) philosophy of continuous improvement
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {}
        I’m driven by the idea that computer science can transform everyday
        struggles into meaningful, practical solutions. Everything I build is
        centered on making life easier, better, and more accessible for others.
      </p>
    </section>
  );
}
