// import * as React from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// export default function DropDownComponentsteacher() {
//   const [age, setAge] = React.useState("");

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">مدرس </InputLabel>
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
import * as React from 'react';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

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
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <TextField
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


