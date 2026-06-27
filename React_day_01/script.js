const parent = React.createElement('div', { className: 'elder', id: 'elder' }, [
    React.createElement(
        'h1',
        { className: 'heading-1', key: 1 },
        'hey i am the speak English'
    ),
    React.createElement(
        'h1',
        { className: 'heading-2', key: 2 },
        'here is i am, just studying'
    ),
    React.createElement(
        'img',
        {
            key: 3,
            style: {width: 200, borderRadius: 30, backgroundColor: 'dodgerblue', padding: 30},
            src: 'https://images.unsplash.com/photo-1773332611514-238856b76198?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
            alt: 'i did not set the image yet'
        }
    )
])

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(parent)
console.log(
    parent
)



const div2 = document.createElement('div');
div2.className = 'elder2';
div2.id = 'elder2';

const heading1 = document.createElement('h1');
heading1.textContent = 'hey i am the speak English';
div2.append(heading1);

const heading2 = document.createElement('h1');
heading2.textContent = 'here is i am, just studying';
div2.append(heading2);

const img = document.createElement('img');
img.alt = 'i did not set the image yet';
img.src = 'https://images.unsplash.com/photo-1773332611514-238856b76198?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8';
div2.append(img)

document.body.append(div2)