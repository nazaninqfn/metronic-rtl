// import * as React from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// export default function DropDownComponents() {
//   const [age, setAge] = React.useState("");

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">دوره </InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>ملوان عمومی</MenuItem>
//           <MenuItem value={20}>قایقران</MenuItem>
//           <MenuItem value={30}>مهمان داری</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
// import "./styles.css";
// import * as React from "react";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import { ListItemText, Select } from "@mui/material";
// import { Checkbox } from "@mui/material";
// // import { ListItemText } from "@material-ui/core";

// const groups = [
//   {
//     name: "group1",
//     group_id: 1
//   },
//   {
//     name: "group2",
//     group_id: 2
//   }
// ];

// const options = [
//   {
//     name: "option1",
//     option_id: 1,
//     group_id: 1
//   },
//   {
//     name: "option2",
//     option_id: 2,
//     group_id: 1
//   },
//   {
//     name: "option3",
//     option_id: 3,
//     group_id: 1
//   },
//   {
//     name: "option4",
//     option_id: 4,
//     group_id: 2
//   },
//   {
//     name: "option5",
//     option_id: 5,
//     group_id: 2
//   },
//   {
//     name: "option6",
//     option_id: 6,
//     group_id: 2
//   }
// ];

// export default function App() {
//   const [selectedElements, setSelectedElements] = React.useState(groups);

//   const onSelectionChange = (event, group) => {
//     //const {target: { value },} = event;
//     const value = event.target.value;

//     selectedElements.map((item) => {
//       if (item.group_id === group.group_id) {
//         item.value = typeof value === "string" ? value.split(",") : value;
//       }
//     });
//     setSelectedElements([...selectedElements]);
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
//         {selectedElements.map(function (group) {
//           return (
//             <Select
//               style={{ marginBottom: "10px" }}
//               multiple
//               value={group?.value || []}
//               onChange={(e) => onSelectionChange(e, group)}
//               id={group.group_id}
//               renderValue={(selected) => selected.join(", ")}
//               sx={{
//                 "& legend": { display: "none" },
//                 "& fieldset": { top: 0 }
//               }}
//             >
//               {options.map(function (option) {
//                 if (option.group_id === group.group_id) {
//                   return (
//                     <MenuItem key={option.option_id} value={option.name}>
//                       <ListItemText primary={option.name} />
//                       <Checkbox
//                         checked={selectedElements.indexOf(option.name) > -1}
//                       />
//                     </MenuItem>
//                   );
//                 }
//               })}
//             </Select>
//           );
//         })}
//       </FormControl>
//     </div>
//   );
// }
import * as React from 'react';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Box, InputLabel } from '@mui/material';

// Consuming the outer theme is only required with coexisting themes, like in this documentation.
// If your app/website doesn't deal with this, you can have just:
const theme = createTheme({ direction: 'rtl' })
// const theme = (outerTheme: Theme) =>
//   createTheme({
//     direction: 'rtl',
//     palette: {
//       mode: outerTheme.palette.mode,
//     },
//   });

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function DropDownComponentsteacher() {
  return (
    
    <CacheProvider
    
    value={cacheRtl}>
    
      
      <ThemeProvider theme={theme}>
        <div 
        dir="rtl" >
          <TextField
          sx={{maxWidth :'120px'}}
            label=" مدرس "
            placeholder="بندر عباس"
            // helperText="هذا نص مساعد"
            variant="outlined"
            
          />
        </div>
      </ThemeProvider>


    </CacheProvider>
  );
}



