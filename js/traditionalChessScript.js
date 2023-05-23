function PiecesLoad()
{
    //Nigga pieces
    var table = document.getElementById("chess-board-table")
    for (let i = 1; i < table.rows.length; i++) 
    {
        if (i == 2) 
        {
            var row = table.rows[i];
            for (let j = 1; j < row.cells.length; j++) 
            {
                var square = row.cells[j];
                square.innerHTML = `<img src=".\\img\\pieces\\black_pawn.png">`
            }   
        }
    }

    table.rows[1].cells[1].innerHTML = `<img src=".\\img\\pieces\\black_rook.png">`
    table.rows[1].cells[2].innerHTML = `<img src=".\\img\\pieces\\black_knight.png">`
    table.rows[1].cells[3].innerHTML = `<img src=".\\img\\pieces\\black_bishop.png">`
    table.rows[1].cells[4].innerHTML = `<img src=".\\img\\pieces\\black_queen.png">`
    table.rows[1].cells[5].innerHTML = `<img src=".\\img\\pieces\\black_king.png">`
    table.rows[1].cells[6].innerHTML = `<img src=".\\img\\pieces\\black_bishop.png">`
    table.rows[1].cells[7].innerHTML = `<img src=".\\img\\pieces\\black_knight.png">`
    table.rows[1].cells[8].innerHTML = `<img src=".\\img\\pieces\\black_rook.png">`

    //White pieces
    for (let i = 1; i < table.rows.length; i++) 
    {
        if (i == 7)
        {
            var row = table.rows[i];
            for (let j = 1; j < row.cells.length; j++) 
            {
                var square = row.cells[j];
                square.innerHTML = `<img src=".\\img\\pieces\\white_pawn.png">`
            }
        }
    }

    table.rows[8].cells[1].innerHTML = `<img src=".\\img\\pieces\\white_rook.png">`
    table.rows[8].cells[2].innerHTML = `<img src=".\\img\\pieces\\white_knight.png">`
    table.rows[8].cells[3].innerHTML = `<img src=".\\img\\pieces\\white_bishop.png">`
    table.rows[8].cells[4].innerHTML = `<img src=".\\img\\pieces\\white_queen.png">`
    table.rows[8].cells[5].innerHTML = `<img src=".\\img\\pieces\\white_king.png">`
    table.rows[8].cells[6].innerHTML = `<img src=".\\img\\pieces\\white_bishop.png">`
    table.rows[8].cells[7].innerHTML = `<img src=".\\img\\pieces\\white_knight.png">`
    table.rows[8].cells[8].innerHTML = `<img src=".\\img\\pieces\\white_rook.png">`

}