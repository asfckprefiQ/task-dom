export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const elem = document.createElement(tag);
        elem.innerHTML = content;
        document.body.appendChild(elem);
    }
}

export function generateTree(childrenCount, level) {
    const root = document.createElement('div');
    root.className = 'item_1';

    function addChildren(parent, depth) {
        if (depth > level) {
            return;
        }
        for (let i = 0; i < childrenCount; i++) {
            const div = document.createElement('div');
            div.className = 'item_' + depth;
            addChildren(div, depth + 1);
            parent.appendChild(div);
        }
    }

    addChildren(root, 2);
    return root;
}

export function replaceNodes() {
    const tree = generateTree(2, 3);
    const nodes = tree.querySelectorAll('.item_2');

    for (let i = 0; i < nodes.length; i++) {
        const oldNode = nodes[i];
        const section = document.createElement('section');
        section.className = 'item_2';

        while (oldNode.firstChild) {
            section.appendChild(oldNode.firstChild);
        }

        oldNode.parentNode.replaceChild(section, oldNode);
    }

    return tree;
}