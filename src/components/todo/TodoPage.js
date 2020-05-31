import React from "react";
import ReactDataGrid from "react-data-grid";
import { Editors } from "react-data-grid-addons";
import DateComponent from "../common/DateComponent";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
// import {IssueTypeEditor} from "./"
const { DropDownEditor } = Editors;
const {
  DraggableHeader: { DraggableContainer },
} = require("react-data-grid-addons");
const {
  Draggable: {
    // Container: DraggableContainerRow,
    RowActionsCell,
    DropTargetRowContainer,
  },
  Data: { Selectors },
} = require("react-data-grid-addons");
const RowRenderer = DropTargetRowContainer(ReactDataGrid.Row);

const statusTypes = [
  { id: "unassigned", value: "Unassigned" },
  { id: "pending", value: "Pending" },
  { id: "workingOnIt", value: "Working on it" },
  { id: "stuck", value: "Stuck" },
  { id: "done", value: "Done" },
  { id: "critical", value: "Critical" },
];
const priorityTypes = [
  { id: "unassigned", value: "Unassigned" },
  { id: "low", value: "Low" },
  { id: "medium", value: "Medium" },
  { id: "high", value: "High" },
  { id: "urgent", value: "Urgent" },
];
const IssueTypeEditor = (types) => <DropDownEditor options={types} />;

const defaultColumnProperties = {
  resizable: true,
  draggable: true,
  editable: true,
};
const renderComponent = (Component) => <Component />;

const columns = [
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

const rows = [
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

export default class Example extends React.Component {
  state = { rows, columns, newTodo: "", selectedIds: [1, 1] };
  static defaultProps = { rowKey: "id" };
  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState((state) => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };
  isDraggedRowSelected = (selectedRows, rowDragSource) => {
    if (selectedRows && selectedRows.length > 0) {
      let key = this.props.rowKey;
      return (
        selectedRows.filter((r) => r[key] === rowDragSource.data[key]).length >
        0
      );
    }
    return false;
  };
  onRowsSelected = (rows) => {
    this.setState({
      selectedIds: this.state.selectedIds.concat(
        rows.map((r) => r.row[this.props.rowKey])
      ),
    });
  };

  onRowsDeselected = (rows) => {
    let rowIds = rows.map((r) => r.row[this.props.rowKey]);
    this.setState({
      selectedIds: this.state.selectedIds.filter(
        (i) => rowIds.indexOf(i) === -1
      ),
    });
  };

  reorderRows = (e) => {
    let selectedRows = Selectors.getSelectedRowsByKey({
      rowKey: this.props.rowKey,
      selectedKeys: this.state.selectedIds,
      rows: this.state.rows,
    });
    let draggedRows = this.isDraggedRowSelected(selectedRows, e.rowSource)
      ? selectedRows
      : [e.rowSource.data];
    let undraggedRows = this.state.rows.filter(function (r) {
      return draggedRows.indexOf(r) === -1;
    });
    let args = [e.rowTarget.idx, 0].concat(draggedRows);
    Array.prototype.splice.apply(undraggedRows, args);
    this.setState({ rows: undraggedRows });
  };
  onHeaderDrop = (source, target) => {
    const stateCopy = Object.assign({}, this.state);
    const columnSourceIndex = this.state.columns.findIndex(
      (i) => i.key === source
    );
    const columnTargetIndex = this.state.columns.findIndex(
      (i) => i.key === target
    );

    stateCopy.columns.splice(
      columnTargetIndex,
      0,
      stateCopy.columns.splice(columnSourceIndex, 1)[0]
    );

    const emptyColumns = Object.assign({}, this.state, { columns: [] });
    this.setState(emptyColumns);

    const reorderedColumns = Object.assign({}, this.state, {
      columns: stateCopy.columns,
    });
    this.setState(reorderedColumns);
  };

  render() {
    const { rows, columns, newTodo } = this.state;
    return (
      <>
        <DraggableContainer onHeaderDrop={this.onHeaderDrop}>
          <ReactDataGrid
            columns={columns}
            rowGetter={(i) => rows[i]}
            rowsCount={rows.length}
            onGridRowsUpdated={this.onGridRowsUpdated}
            enableCellSelect={true}
            // row reorder props
            enableCellSelection={true}
            rowActionsCell={RowActionsCell}
            minHeight={500}
            rowRenderer={<RowRenderer onRowDrop={this.reorderRows} />}
            rowSelection={{
              showCheckbox: true,
              enableShiftSelect: true,
              onRowsSelected: this.onRowsSelected,
              onRowsDeselected: this.onRowsDeselected,
              selectBy: {
                keys: {
                  rowKey: this.props.rowKey,
                  values: this.state.selectedIds,
                },
              },
            }}
          />
        </DraggableContainer>
        <input
          name="newTodo"
          value={newTodo}
          onChange={(e) =>
            this.setState({
              [e.target.name]: e.target.value,
            })
          }
        />
        <button
          onClick={() => {
            const newRows = rows;
            const data = {
              id: rows[rows.length - 1].id + 1,
              thingsTodo: newTodo,
              messageNotify: "",
              owner: "",
              status: "Unassigned",
              dueDate: "",
              priority: "Unassigned",
            };
            newRows.push(data);
            this.setState({ rows: newRows });
          }}
        >
          Add todo
        </button>
      </>
    );
  }
}
