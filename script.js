const container = document.querySelector('.animated-snow');
const snowflake = document.querySelector('.snow');

function appendSnowflake() {
    const newSnowflake = snowflake.cloneNode(true);

    //to make each dot different
    newSnowflake.style.paddingLeft = Math.random() * 10 + 'px';
    newSnowflake.style.animationDuration = Math.random() * 15 + 4 + 's';
    newSnowflake.style.opacity = Math.random() * 1;

    container.append(newSnowflake);
}

const interval = setInterval(appendSnowflake, 30);

setTimeout(() => {
    clearInterval(interval);
}, 10000);