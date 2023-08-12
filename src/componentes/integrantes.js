import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/material";

const yo = new URL("../imagenes/yo.jpg",import.meta.url);
const elmer = new URL("../imagenes/elmer.jpg",import.meta.url);
const wandy = new URL("../imagenes/wandy.jpg",import.meta.url);
const alain = new URL("../imagenes/alain.jpg",import.meta.url);

function Integrantes(){
    return(
     <section className="informationx" id="integrantes">
        <div className="information__container container">
            <div className="information__texts">
                <h2 className="subtitle">Integrantes</h2>
            </div>
     <div className="picture__contx">
     <Card sx={{maxWidth: 200, height: "350px", justifySelf: "center",  fontSize: 50}} >
      <CardMedia
        component="img"
        alt="FOTO"
        height="200"
        image={yo}
        
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div"  textAlign="center">
          Jenry jose Sanchez Hodge
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary" >
          #20231080
        </Typography>
      </CardContent>
    </Card>



    <Card sx={{ maxWidth: 200, height: "350px", justifySelf: "center"  }}  >
      <CardMedia
        component="img"
        alt="FOTO"
        height="200"
        image={elmer}
        object-fit= "cover"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  textAlign="center">
        Elmer Joel Montilla Castro
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          #20231212
        </Typography>
      </CardContent>
    </Card>


    <Card sx={{ maxWidth: 200, height: "350px" , justifySelf: "center" }}  >
      <CardMedia
        component="img"
        alt="FOTO"
        height="200"
        image={wandy}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center" >
        Wandy Manuel Fernández Pérez
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary" >
          #20231091
        </Typography>
      </CardContent>
    </Card>
    


    <Card sx={{ maxWidth: 200, height: "350px" , justifySelf: "center" }}  >
      <CardMedia
        component="img"
        alt="FOTO"
        height="200"
        image={alain}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center" >
        Alain manuel sepulveda tejeda 
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary" >
          #20231141
        </Typography>
      </CardContent>
    </Card>

    
    
     </div>
      </div>
    </section>
    )
};

export default Integrantes




