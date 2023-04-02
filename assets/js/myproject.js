const listproject = []

function getProject(event){
    event.preventDefault()

    let project = document.getElementById("project-name").value
    let start = document.getElementById("project-start").value
    let end = document.getElementById("project-end").value
    let description = document.getElementById("project-desc").value
    let img = document.getElementById("img-file").files
    let node = document.getElementById("node").checked
    let react = document.getElementById("react").checked
    let next = document.getElementById("next").checked
    let typescript = document.getElementById("typescript").checked

    img = URL.createObjectURL(img[0])
    
    let blog = {
        project,
        start,
        end,
        description,
        img,
        node,
        react,
        next,
        typescript
    }
    listproject.push(blog);
    console.log(listproject);
    renderProject();
}

function renderProject(){
    document.getElementById("project-list").innerHTML = ""
    for(let i = 0 ; i < listproject.length; i++) {
        document.getElementById("project-list").innerHTML += 
        `<div class="myproject-card">
            <img src="${listproject[i].img}" style="height: 200px;" alt="posted">
            <a style="font-weight: bold; cursor: pointer; text-decoratui" href="detail-project.html">${listproject[i].project}</a>
            <p>durasi : 3 bulan</p>
            <div class="desc-project">
            <article>${listproject[i].description}</article>
            </div>
            <div class="tech-used">
            ${listproject[i].node ? "<img src='assets/img/node-js'>" : "" }
            ${listproject[i].react ? "<img src='assets/img/react-js'>" : "" }
            ${listproject[i].next ? "<img src='assets/img/next-js'>" : ""}
            ${listproject[i].typescript ? "<img src='assets/img/typescript.png' >" :""}
            </div>
            <div style="display: flex;">
                <button class="action">edit</button>
                <button class="action">delete</button>
            </div>
        </div>  
    </div>`
    }
}