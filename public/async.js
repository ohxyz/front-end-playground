function sleep( seconds ) {

    return new Promise( ( resolve, reject )  => { 

        setTimeout( () => {

            resolve( 'value' );

        }, seconds * 1000 );

    } ) 
}

function getValues( value ) {

    console.log( 'Value:', value );
    delay( 3 );

}

async function delay( seconds ) {

    console.log( 'before await' );

    let result = await sleep( seconds );

    console.log( 'After await', result );
}

function sleep2( milliseconds ) {

    var start = new Date().getTime();

    while( true ) {

        var now = new Date().getTime();

        if ( ( now - start ) > milliseconds ) {

            break;
        }
    }
}

sleep2( 2000 );

console.log( 'ok' );