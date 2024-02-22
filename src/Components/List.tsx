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
import { itemProp } from "../App";

type TextListProps = {
  item: itemProp;
  onHandleCopy: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    text: string
  ) => void;
  onHandleEdit: (id: string) => void;
  onHandleDelete: (id: string) => void;
};

function CopyList({
  item,
  onHandleCopy,
  onHandleEdit,
  onHandleDelete,
}: TextListProps) {
  return (
    <ListItem
      style={{ padding: "0" }}
      disableGutters
      secondaryAction={
        <Box>
          <IconButton
            aria-label="Copy"
            onClick={(e) => onHandleCopy(e, item.text)}
          >
            <ContentCopyIcon />
          </IconButton>
          <IconButton aria-label="Edit" onClick={() => onHandleEdit(item.id)}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="Delete"
            onClick={() => onHandleDelete(item.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      }
    >
      <ListItemButton>
        <ListItemText>{item.text}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default CopyList;
