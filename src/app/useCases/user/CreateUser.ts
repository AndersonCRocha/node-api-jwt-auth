interface Props {
  email: string,
  password: string
}

class CreateUserUseCase {
  async execute({ email, password }: Props) {
    console.log({ email, password });
  }
}

export default new CreateUserUseCase();
