export function drawItem(item) {
    const itemElement = document.createElement('div')
    itemElement.classList = "item"

    const imgElement = document.createElement('img')
    imgElement.classList = "item_image"

    const titleElement = document.createElement('span')
    titleElement.classList = "item_title"
    titleElement.textContent = item.title

    itemElement.appendChild(imgElement)
    itemElement.appendChild(titleElement)

    return itemElement
}