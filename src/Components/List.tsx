import {
  Tooltip,
  List,
  ListItem,
  Box,
  IconButton,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { listProp } from "../App";

type TextListProps = {
  copyTooltipText: string;
  handleOnClick: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    text: string
  ) => void;
  list: listProp[];
};

function CopyList({ list, copyTooltipText, handleOnClick }: TextListProps) {
  return (
    <List>
      {list.map((listItem) => (
        <Tooltip title={copyTooltipText} key={listItem.id}>
          <ListItem
            style={{ padding: "0" }}
            onClick={(e) => handleOnClick(e, listItem.text)}
            disableGutters
            secondaryAction={
              <Box>
                <IconButton aria-label="Edit">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </Box>
            }
          >
            <ListItemButton>
              <ListItemText>{listItem.text}</ListItemText>
            </ListItemButton>
          </ListItem>
        </Tooltip>
      ))}
    </List>
  );
}

export default CopyList;
