/**
* Returns a random number between min (inclusive) and max (exclusive)
*/
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function yScale(index) {
    return ((height - marginBottom - marginTop - 5) * (n - index) / n + marginTop).toString() + "px"
}

function xScale(index, leftLimit, rightLimit) {
    return index * (rightLimit - leftLimit) + leftLimit;
}

function add_class(element, new_class) {
    let classes = element.attr("class");
    classes = classes === null ? "" : classes;
    let separator = classes === "" ? "" : " "; 
    if (!classes.includes(new_class)) {
        classes = classes + separator + new_class;
    }
    element.attr("class", classes)
}

function remove_class(element, to_remove_class) {
    let classes = element.attr("class");
    classes = classes === null ? "" : classes;
    let to_remove = to_remove_class;
    if (classes.includes(" " + to_remove_class)) {
        to_remove = " " + to_remove_class + " ";
    } else if (classes.includes(to_remove_class + " ")) {
        to_remove = to_remove_class + " ";
    }
    element.attr("class", classes.replace(to_remove, ""));
}

function reset_data_class(svg) {
    remove_class(svg, "data1");
    remove_class(svg, "data2");
    add_class(svg, "data2");
}

function rotate_through_images(id, images) {
    let img = document.getElementById(id);
    let index = 0;
    img.src = images[index];
    window.addEventListener("keypress", (event) => {
        console.log("Current: " + index);
        console.log(img)
        if (event.key == "f") {
            index = index >= images.length - 1 ? 0 : index + 1;
        } else if (event.key == "g") {
            index = index <= 0 ? images.length - 1 : index - 1;
        }
        console.log("Changed: " + index);
        console.log("Selected src: " + images[index])
        img.src = images[index]

    }, false)
}