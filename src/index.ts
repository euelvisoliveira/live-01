
import express, {Request, Response, NextFunction} from 'express';

const app = express(); // expres é uma bliblioteca para gerenciar rotas http

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({foo: 'sucesso total! vocês são demais'})
})

app.listen(3000, () => {
  console.log('Aplicação executando na porta 3000')
})