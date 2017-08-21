export default function(){

    this.transition(
        this.fromRoute('kid.index'),
        this.toRoute('kid.methods'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
    this.transition(
        this.fromRoute('kid.index'),
        this.toRoute('kid.lunches'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
    this.transition(
        this.fromRoute('kid.index'),
        this.toRoute('kid.settings'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
}
