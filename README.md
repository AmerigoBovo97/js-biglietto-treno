esercizio di oggi: Biglietto del treno
cartella / repo:  js-biglietto-treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20 % per i minorenni
    va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Create un file README.md e provate prima a scrivere il processo per la risoluzione del problema come visto in classe.
Dopo trasformate il vostro linguaggio formale in js.


Passaggi:

1. ripetere finchè l'utente non inserisce dati corretti
    1a. chiedere all'utente quanti km ha intenzione di fare
    1b. controllare che il dato si a un numero e sia maggiore di 0

2. ripetere finchè l'utente non inserisce dati corretti
    2a. chiedere all'utente quanti anni ha
    2b. controllare che il dato si a un numero e sia compreso tra 0 e 150

3. calcolare l'importo senza sconto

4. se è minorenne
        moltiplicare l'importo per 0.2
   altrimenti se è over 65
        mopltiplicare l'importo per 0.4

5. arrotondare l'importo a 2 decimali

6. restituire l'importo finale all'utente