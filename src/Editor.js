import React from 'react'

function Editor() {
    const selectableTextArea = document.querySelectorAll(".selectableTextArea")
    // console.log(selectedTextArea)
    const toolbar = document.querySelectorAll(".toolbar")
    selectableTextArea.forEach(elem => {
        elem.addEventListener("mouseup", selectableTextAreaMouseUp);
    });
    function selectableTextAreaMouseUp(event) {
        // setTimeout(() => { // In order to avoid some weird behavior...
        //   const selectedText = window.getSelection().toString().trim();
        //   if(selectedText.length) { 
        //     const x = event.pageX;
        //     const y = event.pageY;
        //     const toolbarWidth = Number(getComputedStyle(toolbar).width.slice(0,-2));
        //     const toolbarHeight = Number(getComputedStyle(toolbar).height.slice(0,-2));

        //     if(document.activeElement !== toolbar) {
        //       toolbar.style.left = `${x - toolbarWidth*0.5}px`;
        //       toolbar.style.top = `${y - toolbarHeight*1.25}px`;
        //       toolbar.style.display = "block";
        //       toolbar.classList.add("btnEntrance");
        //     }
        //     else {
        //       toolbar.style.left = `${x-toolbarWidth*0.5}px`;
        //       toolbar.style.top = `${y-toolbarHeight*0.5}px`;
        //     }
        //   }    
        // }, 0);
        const selectedText = window.getSelection().toString().trim();
        console.log(selectedText)
    }


    return (
        <>
            <div id="addToolbar" class="toolbar">
                <ul class="tool-list flex">
                    <li class="tool" >
                        <button
                            type="button"
                            data-style="font-bold"
                            id="inlineStyle"
                            class="tool--btn px-2 py-1 " onClick={(e) => {
                                document.execCommand('bold', false, null);
                                e.preventDefault();
                            }}>
                            <i class=' fas fa-bold'></i>
                        </button>
                    </li>
                    <li class="tool">
                        <button
                            type="button"
                            id="inlineStyle"
                            data-style="italic"
                            class="tool--btn px-2 py-1" onClick={(e) => {
                                document.execCommand('italic', false, null);
                                e.preventDefault();
                            }}>
                            <i class=' fas fa-italic'></i>
                        </button>
                    </li>
                    <li class="tool">
                        <button
                            type="button"
                            id="inlineStyle"
                            data-style="underline"
                            class="tool--btn px-2 py-1" onClick={(e) => {
                                document.execCommand('underline', false, null);
                                e.preventDefault();
                            }}>
                            <i class=' fas fa-underline'></i>
                        </button>
                    </li>
                    <li class="tool">
                        <button
                            type="button"
                            data-command="createlink"
                            class="tool--btn px-2 py-1" onClick={(e) => {
                                let url = prompt("Enter the link here: ", "http:\/\/");
                                document.execCommand('createlink', false, url);
                                e.preventDefault();
                            }}>
                            <i class=' fas fa-link'></i>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Editor
