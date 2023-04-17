import { Directive, ElementRef, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Directive({
  selector: '[ErrorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  private _color:string = 'red';
  private _mensaje: string = 'Este campo es requerido'

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor:string) {
    this._color = valor;
    this.setColor();
  }
 @Input() set mensaje(msj: string) {
    this._mensaje = msj;
    this.setMsg();
 }
 @Input() set valido (valor: boolean) {
    if(valor){
      this.htmlElement.nativeElement.classList.add('hidden');
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
}

  constructor( private _element: ElementRef<HTMLElement>){ 
    this.htmlElement = _element;
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }
  ngOnInit(): void {
    // console.log('NgOnInit directive');
    this.setColor();
    this.setMsg();
    this.setEstilo();
  }
  setEstilo():void{
    this.htmlElement.nativeElement.classList.add('form-text')

  }

  setColor():void{
    this.htmlElement.nativeElement.style.color = this._color;
  }
  setMsg():void{
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
  
}
