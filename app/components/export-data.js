import Component from '@ember/component';
import FileSaver from 'file-saver';
import { computed } from '@ember/object';

export default Component.extend({
  exportCompletedTasks: true,
  actions: {
    downloadFile(ws_data, type) {
      ws_data.then(function(result) {
        const fileType = type === 'xlsx' ? 'xlsx' : 'csv';
        var wb = XLSX.utils.book_new();
        wb.Props = {
          Title: "Todo app",
          Subject: "Tasks",
          Author: "Todo",
          CreatedDate: new Date()
        };
        wb.SheetNames.push("Tasks Sheet");
        var ws = XLSX.utils.aoa_to_sheet(result);
        wb.Sheets["Tasks Sheet"] = ws;
        var wbout = XLSX.write(wb, {
          bookType: fileType,
          type: 'binary',
        });
        function s2ab(s) {
          var buf = new ArrayBuffer(s.length);
          var view = new Uint8Array(buf);
          for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
          return buf;
        };
        FileSaver.saveAs(new Blob([s2ab(wbout)], {
          type: "application/octet-stream"
        }), `Task.${fileType}`);
      })
    },
  }
});
