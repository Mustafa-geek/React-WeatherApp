import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"


export default function InfoBox({info}){
   
const hotAdd = "https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyJTIwZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
const winterAdd = "https://images.unsplash.com/photo-1528191710846-99b8717a2830?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
const rainAdd = "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
        <div className='InfoBox'>
            <h3>Information Box</h3>
            <div className='Card'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity>80 ? rainAdd : info.temp>25? hotAdd : winterAdd}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMin}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>The weather can be described as {info.weather} & feels like {info.feelsLike}</p>
        </Typography>
      </CardContent>
    </Card>
    </div>

        </div>
    )
}