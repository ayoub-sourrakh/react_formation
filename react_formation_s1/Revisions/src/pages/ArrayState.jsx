import React, {useState} from 'react'

const ArrayState = () => {
    const [rectangles, setRectangles] = useState([])

    const handleClick = () => {
        setRectangles([
            ...rectangles,
            {
                width: randomIntFromInterval(100, 200),
                height: randomIntFromInterval(100, 200),
                background: getRandomColor(),
            },
        ])
    }

    const handleClickDelete0 = (index) => {
        const oldState = [...rectangles]
        oldState.splice(index, 1)
        setRectangles(oldState)
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function getRandomColor() {
        var letters = "0123456789ABCDEF"
        var color = "#"
        for (var i=0; i<6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }
  return (
    <div className='arrayState'>
        <h1>ArrayState</h1>
        <button onClick={handleClick}>Ajouter un rectangle</button>

        {
            rectangles.map((rectangle,i) => (
                <div
                    key={i}
                    style={{
                        background:rectangle.background,
                        width: rectangle.width + 'px',
                        height: rectangle.height + 'px',
                        margin: '10px',
                    }}
                    onClick={() => {handleClickDelete(i)}}
                >
                </div>
        ))}  
        
    </div>
  )
}

export default ArrayState