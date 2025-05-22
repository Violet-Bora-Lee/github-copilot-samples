<react-codebase-guidelines>
    <title>React Style Guide</title>
    <purpose>To ensure consistent, maintainable React code.</purpose>

    <section name="Component Structure">
        <principle name="Component Naming">
            <description>Use PascalCase for component names (e.g., MyComponent.tsx).</description>
            <example language="typescript">
                // Good:
                const MyComponent = () => { ... };
                // Bad:
                const myComponent = () => { ... };
            </example>
        </principle>
        <principle name="Single Responsibility Principle">
            <description>Each component should do one thing well. Split large components.</description>
            <example language="typescript">
                // Good:
                const Button = ({ onClick, children }) => { ... };
                // Bad:
                const MultiPurposeComponent = () => { ... };
            </example>
        </principle>
    </section>

    <section name="Styling">
        <principle name="CSS Modules">
            <description>Use CSS Modules for styling components. Place the module file in the same directory as the component.</description>
            <example language="typescript">
                // Good:
                import styles from './MyComponent.module.css';
                const MyComponent = () => <div className={styles.container}></div>;

                // Bad:
                const MyComponent = () => <div className="container"></div>;
            </example>
        </principle>
    </section>

    <section name="Testing">
        <principle name="Basic Tests">
            <description>All components should have tests that verify correct rendering.</description>
            <example language="typescript">
                // Good:
                describe('MyComponent', () => {
                    test('renders correctly', () => { render(<MyComponent />); });
                });

                // Bad:
                test('renders', () => { render(<MyComponent />); });
            </example>
        </principle>
    </section>
</react-codebase-guidelines>