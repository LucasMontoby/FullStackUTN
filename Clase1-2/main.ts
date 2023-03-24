function greet(name: string, greeting?: string): string {            
    if (greeting) {            
    return `${greeting}, ${name}!`;
} 
else {
    return `Hello, ${name}!`;            
}        
}

console.log(greet("Harry"));console.log(greet("Hermione", "Hola"));