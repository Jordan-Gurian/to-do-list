export default function deleteContent() {
    const content = document.querySelector('.content');
    content.innerHTML = '';
    return content;
}