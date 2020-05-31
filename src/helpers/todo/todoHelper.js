import { Editors } from "react-data-grid-addons";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import DateComponent from "../../components/common/DateComponent";

export const { DropDownEditor } = Editors;

const IssueTypeEditor = (types) => <DropDownEditor options={types} />;
const renderComponent = (Component) => <Component />;
const defaultColumnProperties = {
    resizable: true,
    draggable: true,
    editable: true,
  };

export const statusTypes = [
  { id: "unassigned", value: "Unassigned" },
  { id: "pending", value: "Pending" },
  { id: "workingOnIt", value: "Working on it" },
  { id: "stuck", value: "Stuck" },
  { id: "done", value: "Done" },
  { id: "critical", value: "Critical" },
];
export const priorityTypes = [
  { id: "unassigned", value: "Unassigned" },
  { id: "low", value: "Low" },
  { id: "medium", value: "Medium" },
  { id: "high", value: "High" },
  { id: "urgent", value: "Urgent" },
];

export const columns = [
  { key: "thingsTodo", name: "My Group", width: 500 },
  {
    key: "messageNotify",
    name: "",
    editable: false,
    formatter: renderComponent(ChatBubbleOutlineIcon),
  },
  {
    key: "owner",
    name: "Owner",
    editable: false,
    formatter: renderComponent(AccountCircleIcon),
  },
  { key: "status", name: "Status", editor: IssueTypeEditor(statusTypes) },
  {
    key: "dueDate",
    name: "Due Date",
    formatter: renderComponent(DateComponent),
  },
  {
    key: "priority",
    name: "Priority",
    editor: IssueTypeEditor(priorityTypes),
  },
].map((c) => ({ ...defaultColumnProperties, ...c }));

export const rows = [
  {
    id: 1,
    thingsTodo: "todo name1",
    messageNotify: "msg icon",
    owner: "photo icon",
    status: "Unassigned",
    dueDate: "date",
    priority: "Unassigned",
  },
  {
    id: 2,
    thingsTodo: "todo name2",
    messageNotify: "msg icon",
    owner: "photo icon",
    status: "Unassigned",
    dueDate: "date",
    priority: "Unassigned",
  },
  {
    id: 3,
    thingsTodo: "todo name3",
    messageNotify: "msg icon",
    owner: "photo icon",
    status: "Unassigned",
    dueDate: "date",
    priority: "Unassigned",
  },
];

export default function todoHelper() {
  return <div></div>;
}
