import { crateRoot, createRoot } from 'react-dom/client';




function MyButton() {
    return (
        <button>I'm a button.</button>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(< MyButton />)