import './PrintPage.css';
import {cloneDeep} from "lodash";
import {stateToHTML} from "draft-js-export-html";

function PrintPage({valores, diagnostico, sintomas, plano}) {
  
  const medicacao = cloneDeep(valores.medicacao);
  for (let i = medicacao.length; i < 10; ++i) {
    medicacao.push({
      farmaco: '',
      dose: '',
      frequencia: '',
      via: '',
      h8: '',
      h10: '',
      h12: '',
      h14: '',
      h16: '',
      h18: '',
      h20: '',
      h22: '',
      h24: '',
      h2: '',
      h4: '',
      h6: ''
    });
  }

  const htmlDiag = {__html: stateToHTML(diagnostico.getCurrentContent())};
  const htmlSint = {__html: stateToHTML(sintomas.getCurrentContent())};
  const htmlPlano = {__html: stateToHTML(plano.getCurrentContent())};
  
  return (
    <div id="print-area">
      <div className="top-row">
        <div className="logo">
          <div className="inner-logo">
            <img alt="logo"
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA7CAYAAADLjIzcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKwGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0xMC0yMlQxMTo1NzowMSswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMTAtMjVUMjM6MTg6MDkrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMTAtMjVUMjM6MTg6MDkrMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZTUxNDhkMTctMGJmYi01NzQ3LTg0NDktYjgzOWYyNzBlYTM3IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NTQyMzA5YjYtNTdjMC1lZDQyLTlmNmMtMzE1NGQ3ZDY0OWI4IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YmEzZDJjZTMtMjI1Yi04MDQ5LWI1ZGMtZWUzNjE3NjgyMzcyIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiYTNkMmNlMy0yMjViLTgwNDktYjVkYy1lZTM2MTc2ODIzNzIiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjJUMTE6NTc6MDErMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL3BuZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MzY1MGNhOS02YjRlLTFmNGItYWUyYy0yY2EzMDU3M2RjZGMiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjJUMTI6Mjc6MzArMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWMyNDA3NGUtOTRkZC0zNjQ2LWFmNWMtZTZlNTdkZTMyZTE0IiBzdEV2dDp3aGVuPSIyMDIxLTEwLTIyVDEyOjMxOjQyKzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxMzU2MjBkLWUzMWUtMzc0OC05ZjhkLTY2Y2JkYTlkM2YzZiIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yMlQxMjozMTo0MiswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplNTE0OGQxNy0wYmZiLTU3NDctODQ0OS1iODM5ZjI3MGVhMzciIHN0RXZ0OndoZW49IjIwMjEtMTAtMjVUMjM6MTg6MDkrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWMyNDA3NGUtOTRkZC0zNjQ2LWFmNWMtZTZlNTdkZTMyZTE0IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTk0MTExNjgtYjcyNi00MzRiLWJjMmMtYjRmMzMxOGQwNDI1IiBzdFJlZjpvcmlnaW5hbERvY3VtZW50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"/>
            <br/>
              <span className="brand">NOBREVET</span>
          </div>
        </div>
        <div className="title"><h1>Ficha de Hospitalização</h1></div>
        <div className="data">Data: {valores.dataAtual}</div>
        <div className="local-de-internamento">Local de Internamento:&nbsp;{valores.localDeInternamento}</div>
      </div>
      
      <div className="dados-gerais-row">
        <h3>Dados Gerais</h3>
        <table>
          <tbody>
          <tr>
            <td><span className="item">Doente:</span></td>
            <td>{valores.nome}</td>
            <td><span className="item">Esp:</span></td>
            <td>{valores.especie}</td>
            <td><span className="item">Raça:</span></td>
            <td>{valores.raca}</td>
            <td><span className="item">Idade:</span></td>
            <td>{valores.idade}</td>
            <td><span className="item">Sexo:</span></td>
            <td>{valores.sexo}</td>
          </tr>
          <tr>
            <td><span className="item">Tutor:</span></td>
            <td>{valores.tutor}</td>
            <td><span className="item">Contacto:</span></td>
            <td>{valores.contactoTutor}</td>
            <td><span className="item">NºCliente:</span></td>
            <td>{valores.ncliente}</td>
            <td><span className="item">Peso Entrada:</span></td>
            <td>{valores.pesoEntrada}</td>
            <td><span className="item">Peso Dia:</span></td>
            <td>{valores.pesoDia}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div className="motivo-internamento-row">
        <h3>Motivo de Internamento</h3>

        <div className="motivo-internamento-inner">
          <div className="motivo-internamento-inner-left">
            <div><span className="item">Entrada:</span> {valores.dataEntrada}</div>
            <div><span className="item">Médico:</span> {valores.medico}</div>
            <div><span className="item">Catéter:</span> {valores.dataCateter}</div>
            <div><span className="item">Troca:</span> {valores.dataTrocaCateter}</div>
            <div><span className="item">Local:</span> {valores.localCateter}</div>
          </div>
          <div className="motivo-internamento-inner-right">
            <div id="diagnostico">
              <div><span className="item">Diagnóstico:</span></div>
              <div dangerouslySetInnerHTML={htmlDiag}/>
            </div>
            <div id="sintomas">
              <div><span className="item">Sintomas:</span></div>
              <div dangerouslySetInnerHTML={htmlSint}/></div>
          </div>
        </div>
      </div>

      <div className="referenciacao-row">
        <h3>Referenciação</h3>
        <div className="referenciacao-row-inner">
          <div><span className="item">Referência:</span> {valores.referenciador}</div>
          <div><span className="item">Telefone Referência:</span> {valores.contactoRef}</div>
          <div><span className="item">Hora e Rúbrica:</span></div>
          <div><span className="item">Contacto com Tutor:</span></div>
        </div>
      </div>

      <div className="medicacao-row">
        <h3>Medicação</h3>
        <table>
          <thead>
          <tr>
            <th className="mr-col1">Medicação</th>
            <th className="mr-col2">Dose</th>
            <th className="mr-col3">Freq</th>
            <th className="mr-col4">Via</th>
            <th className="mr-col5">8</th>
            <th className="mr-col6">10</th>
            <th className="mr-col7">12</th>
            <th className="mr-col8">14</th>
            <th className="mr-col9">16</th>
            <th className="mr-col10">18</th>
            <th className="mr-col11">20</th>
            <th className="mr-col12">22</th>
            <th className="mr-col13">24</th>
            <th className="mr-col14">2</th>
            <th className="mr-col15">4</th>
            <th className="mr-col16">6</th>
          </tr>
          </thead>
          <tbody id="med-placement">
          {medicacao.map( ({farmaco, dose, frequencia, via, h8, h10, h12, h14, h16, h18, h20, h22, h24, h2, h4, h6}, index) => (
            <tr key={index}>
              <td>{farmaco}</td>
              <td>{dose}</td>
              <td>{frequencia}</td>
              <td>{via}</td>
              <td className={h8 ? 'cell-highlight' : ''}>&nbsp;</td>
              <td className={h10 ? 'cell-highlight' : ''}/>
              <td className={h12 ? 'cell-highlight' : ''}/>
              <td className={h14 ? 'cell-highlight' : ''}/>
              <td className={h16 ? 'cell-highlight' : ''}/>
              <td className={h18 ? 'cell-highlight' : ''}/>
              <td className={h20 ? 'cell-highlight' : ''}/>
              <td className={h22 ? 'cell-highlight' : ''}/>
              <td className={h24 ? 'cell-highlight' : ''}/>
              <td className={h2 ? 'cell-highlight' : ''}/>
              <td className={h4 ? 'cell-highlight' : ''}/>
              <td className={h6 ? 'cell-highlight' : ''}/>
            </tr>
          ))}
          </tbody>
        </table>
      </div>

      <div className="plano-row">
        <h3>Plano e Exame Físico</h3>
        <div className="plano-row-inner">
          <div className="plano-row-left">
            <div><b>PLANO:</b></div>
            <div dangerouslySetInnerHTML={htmlPlano}/>
          </div>

          <div className="plano-row-right">
            <table>
              <thead>
              <tr>
                <th className="pr-col1">EXAME FÍSICO:</th>
                <th>8h</th>
                <th/>
                <th>16h</th>
                <th/>
                <th>24h</th>
                <th/>
              </tr>
              </thead>
              <tbody>
              <tr><td>Temperatura</td><td/><td/><td/><td/><td/><td/></tr>
              <tr><td>Hidratação</td><td/><td/><td/><td/><td/><td/></tr>
              <tr><td>Mucosas</td><td/><td/><td/><td/><td/><td/></tr>
              <tr><td>TRC (s)</td><td/><td/><td/><td/><td/><td/></tr>
              <tr><td>Freq. Cardíaca</td><td/><td/><td/><td/><td/><td/></tr>
              <tr><td>Freq. Respiratória</td><td/><td/><td/><td/><td/><td/></tr>
              <tr><td>Pulso</td><td/><td/><td/><td/><td/><td/></tr>
              <tr><td>PANI</td><td/><td/><td/><td/><td/><td/></tr>
              <tr><td>Dor</td><td/><td/><td/><td/><td/><td/></tr>
              <tr><td>Observações</td><td/><td/><td/><td/><td/><td/></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="fluidoterapia-row">

        <h3>Fluidoterapia</h3>

        <table>
          <thead>
          <tr>
            <th className="col1"/>
            <th className="col2">Tipo</th>
            <th className="col3">8h</th>
            <th className="col4">10h</th>
            <th className="col5">12h</th>
            <th className="col6">14h</th>
            <th className="col7">16h</th>
            <th className="col8">18h</th>
            <th className="col9">20h</th>
            <th className="col10">22h</th>
            <th className="col11">24h</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><pre><code>TM (   ) + TD (___% em ___h=___) = ____</code></pre>
            </td><td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
          </tr>
          <tr><td/><td/><td/><td/><td/><td/><td/><td/><td/><td/><td/></tr>
          <tr><td/><td/><td/><td/><td/><td/><td/><td/><td/><td/><td/></tr>
          </tbody>
        </table>

      </div>

      <div className="alimentacao-row">
        <h3>Alimentação e Bem Estar</h3>

        <div className="alimentacao-row-inner">
          <div className="alimentacao-row-left">
            <pre><code>NEM TOTAL_______x3 REFEIÇÕES</code></pre>
            <div><b>CONSUMOS:</b></div>
          </div>
          <div className="alimentacao-row-right">
            <table>
              <thead>
              <tr>
                <th className="col1">&nbsp;</th>
                <th className="col2">8h</th>
                <th className="col3">10h</th>
                <th className="col4">12h</th>
                <th className="col5">14h</th>
                <th className="col6">16h</th>
                <th className="col7">18h</th>
                <th className="col8">20h</th>
                <th className="col9">22h</th>
                <th className="col10">24h</th>
              </tr>
              </thead>
              <tbody>
              <tr><td>qt colocada</td><td/><td/><td/><td/><td/><td/><td/><td/><td/></tr>
              <tr>
                <td>qt ingerida</td><td/><td/><td/><td/><td/><td/><td/><td/><td/></tr>
              <tr>
                <td>Água</td><td/><td/><td/><td/><td/><td/><td/><td/><td/></tr>
              <tr>
                <td>Vómito</td><td/><td/><td/><td/><td/><td/><td/><td/><td/></tr>
              <tr>
                <td>Urina</td><td/><td/><td/><td/><td/><td/><td/><td/><td/></tr>
              <tr>
                <td>Fezes</td><td/><td/><td/><td/><td/><td/><td/><td/><td/></tr>
              <tr>
                <td>Passeio</td><td/><td/><td/><td/><td/><td/><td/><td/><td/></tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default PrintPage;
