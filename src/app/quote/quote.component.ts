import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  // preloaded quotes

  quotes: Quote[] = [
    // tslint:disable-next-line: max-line-length
    new Quote('The technology you use impresses no one. The experience you create with it is everything.', 'Sean Gerety','ux, technology, witty, tech', 'Mathew Gitata'),
    // tslint:disable-next-line: max-line-length
    new Quote('We eat for our stomachs, but we hunger with our hearts.', 'Padma Lakshmi', 'cravings, eating, food','Lena Dunham'),
    // tslint:disable-next-line: max-line-length
    new Quote('Money is the most universal and most efficient system of mutual trust ever devised.', 'Yuval Noah Harari','money', 'Duncan Ndegwa'),
    // tslint:disable-next-line: max-line-length
    new Quote('Vulnerability is the birthplace of love, belonging, joy, courage, empathy, and creativity. It is the source of hope, empathy, accountability, and authenticity. If we want greater clarity in our purpose or deeper and more meaningful spiritual lives, vulnerability is the path.', 'Brené Brown', 'accountability, authenticity, belonging, vulnerability', 'Maria Shiver'),
    // tslint:disable-next-line: max-line-length
    new Quote('Travel changes you. As you move through this life and this world you change things slightly, you leave marks behind, however small. And in return, life—and travel—leaves marks on you.', 'Anthony Bourdain', 'journey, travel', 'Josephine Mahite'),
    // tslint:disable-next-line: max-line-length
    new Quote('If you only read the books that everyone else is reading, you can only think what everyone else is thinking.', 'Haruki Murakami', 'books, reading', 'Joseph'),
    // tslint:disable-next-line: max-line-length
    new Quote('The man who passes the sentence should swing the sword. If you would take a man\'s life, you owe it to him to look into his eyes and hear his final words. And if you cannot bear to do that, then perhaps the man does not deserve to die.','George R.R. Martin', 'honor, justice, personal-responsibility, responsibility', 'Sydney'),
    // tslint:disable-next-line: max-line-length
    new Quote('There’s no bad consequence to loving fully, with all your heart. You always gain by giving love.', 'Reese Witherspoon', 'Consequence, Fully, Gain, Giving, Heart, Love', 'Beatrice'),
    // tslint:disable-next-line: max-line-length
    new Quote('Persistence. Perfection. Patience. Power. Prioritize your passion. It keeps you sane.', 'Criss Jami', ' ambition, calling, career, commitment,', 'Mumbe'),
    // tslint:disable-next-line: max-line-length
    new Quote('A winner is a dreamer who never gives up', 'Nelson Mandela', 'inspirational, pushing on, career', 'Audrey'),
    // tslint:disable-next-line: max-line-length
    new Quote('Many people die at twenty five and aren\'t buried until they are seventy five.', 'Benjamin Franklin', 'wordplay', 'Onya'),
    // tslint:disable-next-line: max-line-length
    new Quote('I am a better person when I have less on my plate.', 'Elizabeth Gilbert', 'diet, food', 'John Doe'),
    // tslint:disable-next-line: max-line-length
    new Quote('I will not lose, for even in defeat, there’s a valuable lesson learned, so it evens up for me.', 'Jay Z', 'music, rap, motivational, inspirational', 'Volta'),
  ];

  addNewQuote(quote) {
    this.quotes.push(quote);
  }

  terribleQuote(isTerrible) {
    if (isTerrible) {
      this.quotes.pop();
    }
  }

  constructor() { }

  ngOnInit() {
  }

  toggleAddQuote() {
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm.style.display === 'none') {
      document.getElementById('addQuote').innerText = 'Hide quote posting form.';
      quoteForm.style.display = 'block';
    } else {
      document.getElementById('addQuote').innerText = 'Proceed to posting a quote.';
      quoteForm.style.display = 'none';
    }
  }

}
