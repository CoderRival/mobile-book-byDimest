import './style.css'
import data from './dataBooks'
import Layout from './Layout'
import Home from './Views/Home'
import Book from './Views/Book'

const HomeView = Home({data})
const BookView = Book()

Layout.append(HomeView.element)
Layout.append(BookView.element)