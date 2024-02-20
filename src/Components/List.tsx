import {
  ListItem,
  Box,
  IconButton,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { listProp } from "../App";

type TextListProps = {
  onHandleCopy: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    text: string
  ) => void;
  listItem: listProp;
  onHandleDelete: (id: string) => void;
  onHandleEdit: (id: string) => void;
};

function CopyList({
  listItem,
  onHandleCopy,
  onHandleDelete,
  onHandleEdit,
}: TextListProps) {
  return (
    <ListItem
      style={{ padding: "0" }}
      disableGutters
      secondaryAction={
        <Box>
          <IconButton
            aria-label="Copy"
            onClick={(e) => onHandleCopy(e, listItem.text)}
          >
            <ContentCopyIcon />
          </IconButton>
          <IconButton
            aria-label="Edit"
            onClick={() => onHandleEdit(listItem.id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="Delete"
            onClick={() => onHandleDelete(listItem.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      }
    >
      <ListItemButton>
        <ListItemText>{listItem.text}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default CopyList;
