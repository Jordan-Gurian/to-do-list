export default function localSave(name, param) {
    localStorage.setItem(name, JSON.stringify(param));
}