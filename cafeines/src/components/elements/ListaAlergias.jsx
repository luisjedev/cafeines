

const ListaAlergias = ({data}) => {

    const ALERGIAS = {
        gluten : "https://res.cloudinary.com/dal8nbv6k/image/upload/v1671972037/cafeInes/alergias/gluten_uxluwj.png",
        lacteos : "https://res.cloudinary.com/dal8nbv6k/image/upload/v1671972037/cafeInes/alergias/lacteos_a22grm.png",
        frutos_secos : "https://res.cloudinary.com/dal8nbv6k/image/upload/v1671972037/cafeInes/alergias/frutos_secos_dmgvkg.png"
    }

    return (
        <div className="flex justify-center items-center">
            {data.alergias.includes("gluten") &&
                <div className="ml-2 mr-1">
                    <img src={ALERGIAS.gluten}/>
                </div>
            }
            {data.alergias.includes("lacteos") &&
                <div className="ml-2 mr-1">
                    <img src={ALERGIAS.lacteos}/>
                </div>
            }
            {data.alergias.includes("frutos_secos") &&
                <div className="ml-2 mr-1">
                    <img src={ALERGIAS.frutos_secos}/>
                </div>
            }
        </div>
    )
}

export default ListaAlergias;