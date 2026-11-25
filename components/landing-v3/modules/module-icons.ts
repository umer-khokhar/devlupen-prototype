import {
  Brain, Braces, ClipboardList, Compass, FileText, FlaskConical,
  FolderCode, Layers, Network, Split, Terminal, Workflow,
} from "lucide-react";

export const TOPIC_ICONS = {
  brain: Brain,
  braces: Braces,
  checklist: ClipboardList,
  compass: Compass,
  file: FileText,
  flask: FlaskConical,
  folder: FolderCode,
  layers: Layers,
  network: Network,
  split: Split,
  terminal: Terminal,
  workflow: Workflow,
};

export type TopicIcon = keyof typeof TOPIC_ICONS;
