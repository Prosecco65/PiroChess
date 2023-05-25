function PiecesLoad() 
{ 
    //Nigga pieces
    var table = document.getElementById("chess-board-table") 
    table.rows[1].cells[1].innerHTML = `<img src=".\\img\\pieces\\black_rook.png" id="black-rook-0" data-position-x="1" data-position-y="1">` 
    table.rows[1].cells[2].innerHTML = `<img src=".\\img\\pieces\\black_knight.png" id="black-knight-1" data-position-x="2" data-position-y="1">` 
    table.rows[1].cells[3].innerHTML = `<img src=".\\img\\pieces\\black_bishop.png" id="black-bishop-2" data-position-x="3" data-position-y="1">` 
    table.rows[1].cells[4].innerHTML = `<img src=".\\img\\pieces\\black_queen.png" id="black-queen-3" data-position-x="4" data-position-y="1">` 
    table.rows[1].cells[5].innerHTML = `<img src=".\\img\\pieces\\black_king.png" id="black-king-4" data-position-x="5" data-position-y="1">` 
    table.rows[1].cells[6].innerHTML = `<img src=".\\img\\pieces\\black_bishop.png" id="black-bishop-5" data-position-x="6" data-position-y="1">` 
    table.rows[1].cells[7].innerHTML = `<img src=".\\img\\pieces\\black_knight.png" id="black-knight-6" data-position-x="7" data-position-y="1">` 
    table.rows[1].cells[8].innerHTML = `<img src=".\\img\\pieces\\black_rook.png" id="black-rook-7" data-position-x="8" data-position-y="1">` 
    
    for (let i = 1; i < table.rows.length; i++) 
    { 
        if (i == 2) 
        { 
            var row = table.rows[i]; 
            for (let j = 1; j < row.cells.length; j++) 
            { 
                var square = row.cells[j]; 
                square.innerHTML = `<img src=".\\img\\pieces\\black_pawn.png" id="black-pawn-${j+7}" data-position-x="${j}" data-position-y="2" data-hasmoved="false">`
            } 
        } 
    } 

    //White pieces 
    for (let i = 1; i < table.rows.length; i++) 
    { 
        table.rows[8].cells[1].innerHTML = `<img src=".\\img\\pieces\\white_rook.png" id="white-rook-0" data-position-x="1" data-position-y="8" onclick='calculatePossibleMoves(this)'>` 
        table.rows[8].cells[2].innerHTML = `<img src=".\\img\\pieces\\white_knight.png" id="white-knight-1" data-position-x="2" data-position-y="8" onclick='calculatePossibleMoves(this)'>` 
        table.rows[8].cells[3].innerHTML = `<img src=".\\img\\pieces\\white_bishop.png" id="white-bishop-2" data-position-x="3" data-position-y="8" onclick='calculatePossibleMoves(this)'>` 
        table.rows[8].cells[4].innerHTML = `<img src=".\\img\\pieces\\white_queen.png" id="white-queen-3" data-position-x="4" data-position-y="8" onclick='calculatePossibleMoves(this)'>` 
        table.rows[8].cells[5].innerHTML = `<img src=".\\img\\pieces\\white_king.png" id="white-king-4" data-position-x="5" data-position-y="8" onclick='calculatePossibleMoves(this)'>` 
        table.rows[8].cells[6].innerHTML = `<img src=".\\img\\pieces\\white_bishop.png" id="white-bishop-5" data-position-x="6" data-position-y="8" onclick='calculatePossibleMoves(this)'>` 
        table.rows[8].cells[7].innerHTML = `<img src=".\\img\\pieces\\white_knight.png" id="white-knight-6" data-position-x="7" data-position-y="8" onclick='calculatePossibleMoves(this)'>` 
        table.rows[8].cells[8].innerHTML = `<img src=".\\img\\pieces\\white_rook.png" id="white-rook-7" data-position-x="8" data-position-y="8" onclick='calculatePossibleMoves(this)'>` 
        
        if (i == 7) 
        { 
            var row = table.rows[i]; 
            for (let j = 1; j < row.cells.length; j++) 
            { 
                var square = row.cells[j]; 
                square.innerHTML = `<img src=".\\img\\pieces\\white_pawn.png" id="white-pawn-${j+7}" data-position-x="${j}" data-position-y="7" data-hasmoved="false" onclick='calculatePossibleMoves(this)'>` 
            } 
        } 
    } 
} 

function calculatePossibleMoves(element) 
{ 
    var elementId = element.getAttribute("id") 
    let pieceType 
    const positionX = element.getAttribute("data-position-x") 
    const positionY = element.getAttribute("data-position-y") 
    if (elementId.includes("pawn")) 
        pieceType = "pawn" 
    else if (elementId.includes("rook")) 
        pieceType = "rook" 
    else if (elementId.includes("knight")) 
        pieceType = "knight" 
    else if (elementId.includes("bishop")) 
        pieceType = "bishop" 
    else if (elementId.includes("queen")) 
        pieceType = "queen" 
    else if (elementId.includes("king")) 
        pieceType = "king"; 
    console.log(positionX) 
    console.log(positionY) 
}

// function moves(elementId, positionX, positionY)
// {
//     if (pieceType == "pawn")
//     {
//         if ()
//         {
            
//         }
//     }
// }