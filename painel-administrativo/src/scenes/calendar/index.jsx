import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {Header} from "../../components";
import { tokens } from "../../theme";

export const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt('Por favor insira um novo titulo para o seu evento');
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (window.confirm(
            `Você tem certeza que deseja excluir o evento ${selected.event.title} ?`
        )) {
            selected.event.remove(); 
        }
    };

    return (
        <Box m='20px'>
            <Header title='Calendario' subtitle='Página interativa do calendário'  />

            <Box display='flex' justifyContent='space-between'>
                {/*Calendar sidebar*/}
                <Box flex='1 1 20%' backgroundColor={colors.primary[400] p='15px' borderRadius='4px'}>
                    <Typography variant="h5">Events</Typography>
                    <List >
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: '10px 0',
                                    borderRadius: '2px',
                                }}
                            >
                                <ListItemText
                                primary={event.title}
                                secondary={
                                    <Typography>
                                        {formatDate(event.start, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </Typography>
                                }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/*Calendario */}
                <Box flex='1 1 100%' ml='15px'>

                </Box>
            </Box>
        </Box>
    );
};