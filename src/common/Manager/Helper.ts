import moment from 'moment';


export function formatDate(date: Date, getYear: boolean = false) {
    let data = '';
    if (getYear === true) {
        data = getDate(date) + ' ' + (date.toLocaleString('default', { month: 'short' })) + ' ' + (date.getFullYear() + 543);
    } else {
        data = getDate(date) + ' ' + (date.toLocaleString('default', { month: 'short' }));
    }
    return data;
}

export function getDate(data: Date) {
    return (data.getDate() < 10 ? ('0' + data.getDate()) : data.getDate());
}

export function formatDateForApi(data: Date) {
    const date = data.getFullYear() + '-' + (data.getMonth() + 1 < 10 ? '0' + (data.getMonth() + 1) : data.getMonth() + 1) + '-' + (data.getDate() < 10 ? ('0' + data.getDate()) : data.getDate());
    return date;
}

export function formatDateForAutocomplete(data: Date) {
    const date: any = getDayTh(data.getDay()) + '. ' + getDate(data) + ' ' + subMonthTh(data.getMonth()) + ' ' + getYearTH(data.getFullYear())
    return date;
}

export function formatMYForAutocomplete(data: Date) {
    let date;
    date = subMonthTh(data.getMonth()) + ' ' + getFullYearTH(data.getFullYear());
    if ((date as any) === false) {
        return '-';
    }
    return date;
}

export function formatfullMonth(data: Date) {
    const date = getMonthTh(data.getMonth());
    return date;
}
export function formatsubMonth(data: Date) {
    const date = subMonthTh(data.getMonth());
    return date;
}

export function formatYear(data: Date) {
    const date = getYearTH(data.getFullYear())
    return date;
}

export function formatFullYear(data: Date) {
    const date = getFullYearTH(data.getFullYear());
    return date;
}

export function formatDateShort(data: Date) {
    const date = data.getFullYear() + '-' + (data.getMonth() + 1 < 10 ? '0' + (data.getMonth() + 1)
        : data.getMonth() + 1) + '-' + (data.getDate() + 1 < 10 ? ('0' + data.getDate()) : data.getDate());
    return date;
}

export function getFullYearTH(year: any) {
    const newYears = parseInt(year, undefined) + 543;
    return newYears || year;
}
export function getYearTH(year: any) {
    const Year = parseInt(year, undefined) + 543;
    let newYears = '' + Year;
    newYears = newYears.substring(2, 4);
    return newYears || year;
}

export function getYearAndFutureTH() {
    const year = new Date().getFullYear() as any;
    const newYears = parseInt(year, undefined) + 543;
    const yearFuture = new Date().getFullYear() + 1 as any;
    const newYearFuture = parseInt(yearFuture, undefined) + 543;
    return newYears + ' - ' + newYearFuture || year + '-' + yearFuture;
}

export function getMonthTh(month: any) {
    const monthsTH = [
        'มกราคม',
        'กุมภาพันธ์',
        'มีนาคม',
        'เมษายน',
        'พฤษภาคม',
        'มิถุนายน',
        'กรกฎาคม',
        'สิงหาคม',
        'กันยายน',
        'ตุลาคม',
        'พฤศจิกายน',
        'ธันวาคม'
    ];
    return monthsTH[month] || month;
}
export function subMonthTh(month: any) {
    const monthsTH = [
        'ม.ค.',
        'ก.พ.',
        'มี.ค.',
        'เม.ย.',
        'พ.ค.',
        'มิ.ย.',
        'ก.ค.',
        'ส.ค.',
        'ก.ย.',
        'ต.ค.',
        'พ.ย.',
        'ธ.ค.'
    ];
    return monthsTH[month] || month;
}

export function getDayTh(day: any) {
    const dayTH = [
        'อา',
        'จ',
        'อ',
        'พ',
        'พฤ',
        'ศ',
        'ส'
    ];
    return dayTH[day] || day;
}

export function getDiffDate(startDate: Date, endDate: Date) {
    if (startDate && endDate) {
        const Difference_In_Time = endDate.getTime() - startDate.getTime();
        return Math.floor(Difference_In_Time / (1000 * 3600 * 24));
    } else {
        return 0;
    }

}