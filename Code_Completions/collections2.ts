// Function with Default Parameters
function multiply(a: number, b: number = 1): number {
    return a * b;
}

//function with Optional Parameters
function greet(name: string, greeting?: string): string {
    return `${greeting || 'Hello'}, ${name}`;
}