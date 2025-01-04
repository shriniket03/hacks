import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Button } from "@mui/material";
import dayjs from 'dayjs';

const DateForm: React.FC = () => {
  function handleFormSubmit(event : React.FormEvent) : void {
    event.preventDefault()
    console.log(`User has opted to filter data from ${(event.target as HTMLFormElement).fromDate.value} to ${(event.target as HTMLFormElement).toDate.value}`)
  }

  return (
    <div style={{marginTop:40}}>
      <form onSubmit={handleFormSubmit}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: 10}}>From</p>
              <DatePicker
                format="DD/MM/YYYY"
                sx={{ outlineColor: "white", background: "white" }}
                defaultValue={dayjs()}
                disableFuture
                name="fromDate"
              />
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ margin: 10 }}>To</p>
              <DatePicker
                format="DD/MM/YYYY"
                sx={{ outlineColor: "white", background: "white" }}
                defaultValue={dayjs()}
                disableFuture
                name="toDate"
              />
            </div>
          </div>
        </LocalizationProvider>
        <Button
          type="submit"
          variant="contained"
          style={{marginTop: 40 }}
        >
          Filter
        </Button>
      </form>
    </div>
  );
};

export default DateForm;
