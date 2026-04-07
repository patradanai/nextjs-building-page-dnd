export abstract class ExampleRepository {
    abstract getExample<T>(): Promise<T>
}
