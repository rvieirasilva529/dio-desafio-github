Desafio de Projeto sobre Git/GitHub



# Olá, me chamo Raphael, adoro tecnologia, estou aprendendo a codar! 🙃🖥️🖱️



Este repositório é sobre programação javascript...



### Espero que gostem...



### Abaixo estão minhas redes Sociais.

* [Linkedin](https://www.linkedin.com/in/raphael-lucas-vieira-silva-4a24ab168/)

* [Instagram](https://www.instagram.com/rvieirasilva1990/)

* [GitHub](https://github.com/rvieirasilva529)

  

### Alguns comandos Básicos para Git/GitHub



1- Você já começou seu projeto. Então, vá até o site do GitHub e crie um novo repositório. Copie o endereço do repositório, clicando no botão verde em que está escrito "CODE". Copie esse endereço daí.



2- Na pasta do seu projeto, clique com o botão direito e abra um terminal nesta pasta.



3- Verifique as configurações:

```
git config --list
```

Lá em baixo, verifique se o nome do usuário e o email estão corretos.

Se não estiver, rode os comandos:

```
git config --global user.name "Fulano de Tal"
```



```
git config --global user.email "fulano@gmail.com"
```



4- Iniciar um novo repositório local:

```
git init
```

Vão surgir novos arquivos na pasta do seu projeto.



5- Veja os arquivos modificados por você:

```
git status
```



6- Associar o repositório local ao remoto:

```
git remote add origin coleAquiOLinkQueVocêCopiouNoGithub
```

7- Adicione:

```
git pull origin main
```

8- Mudar de branch

```
git checkout -b main
```



9- Veja os arquivos modificados por você:

```
git status
```



10- Adicione:

```
git add .
```



11- Comitando:

```
git commit -m "Aqui dentro das aspas você escreve o que mudou no projeto"
```



12- Histórico de Commits:

```
git log --oneline
```



13- Se for seu PRIMEIRO push, use:

```
git push origin main
```



14- Depois que já deu o primeiro push, fica só dando o seguinte comando:

```
git push
```



Então, depois disso, todas as vezes que você mudar alguma coisa no projeto, você vai rodar os comandos:

```
git add .
git commit -m "sua mensagem"
git push origin main
```
