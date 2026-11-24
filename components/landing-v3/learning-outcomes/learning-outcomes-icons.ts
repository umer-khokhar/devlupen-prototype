import { Boxes, ClipboardCheck, CodeXml, Compass, FileText, GitBranch, Workflow } from "lucide-react";

export const LEARNING_OUTCOME_ICONS = {
  javascript: CodeXml,
  problemSolving: Workflow,
  architecture: Boxes,
  frameworks: Compass,
  specification: FileText,
  verification: ClipboardCheck,
  judgment: GitBranch,
} as const;
