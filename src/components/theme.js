import {extendTheme} from '@chakra-ui/react'

//DONDE SE CONTROLA EL TEMA DE ESTILOS.

export const myNewTheme = extendTheme({

    //COLORES DE LA MARCA
    colors:{
        blanco1: '#F6F6F6',
        blanco2: '#ABB4BD',
        rojo1: '#FF2424',
        rojo2: '#FF3E3E',
        rojo3: '#EF3651',
        negro1:'#1E1F28',
        negro2: '#2A2C36',
        verde: '#55D85A'
    },
    
    fonts: {
        body: "Metropolis, sans-serif",
        heading: "Metropolis, serif",
        mono: "Metropolis, monospace",
      },

      //PERSONALIZAR CIERTOS COMPONENTES O CREARLES VARIANTES COMO A LOS BOTONES DEL SIDEBAR
    components: {
        Button: {
            defaultProps: {
                _focus:{outline: "0 !important", boxShadow: "none !important"}
            },
            variants: {
                btnBold: {
                    
                    fontWeight: "600",
                    backgroundColor: "rojo1",
                    color:'blanco1',
                    borderRadius: '15px',
                    fontSize: '27px',
                    height: 'auto',
                    width: 'auto'
                },
                nd:{
                    color:'blanco1',
                    fontSize: '20px',
                    fontWeight:'400',
                },
                nm:{
                    color:'blanco1',
                    fontSize: '14px',
                    fontWeight:'400',
                }

               
              
            }
        },
        
        Link:{
            variants:{
                nd:{
                    color:'blanco1',
                    fontSize: '20px',
                    fontWeight:'400',
                },
                nm:{
                    color:'blanco1',
                    fontSize: '14px',
                    fontWeight:'400',
                }
            }
            
        },
        Text:{
            variants:{
              
            }
           
        },
        
    }

})