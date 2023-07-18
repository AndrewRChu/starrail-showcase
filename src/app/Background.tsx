export default function Background() {
    function randomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const STARS = 1000;
    let result = [];
    for (let i = 0; i < STARS; i++) {
        let size = randomNumber(1, 2);
        result.push(
            `${randomNumber(-50, 50)}vw ${randomNumber(
                -50,
                50
            )}vh ${size}px ${size}px rgb(255,255,255,${
                1 / randomNumber(2, 10)
            })`
        );
    }
    let shadow = result.join(",");

    return (
        <div
            id="bg"
            className={`fixed top-1/2 left-1/2 h-[1px] w-[0px] bg-white`}
            style={{ boxShadow: shadow }}
        />
    );
}
